import frappe

def handle_status_change(doc, method):
    # Only proceed for specific statuses
    if doc.status not in ['Showing', 'Visiting']:
        return

    # Define the dynamic filter field
    filter_field = doc.status.lower()

    # Fetch existing events
    events = frappe.get_all(
        'Event',
        filters={
            'reference_doctype': doc.doctype,
            'reference_docname': doc.name,
            filter_field: 1
        },
        fields=['subject', 'status', 'starts_on', 'sync_with_google_calendar', 'google_calendar']
    )

    if not events:
        # No events found, provide a URL for creating a new event
        create_event_url = frappe.utils.get_url(f"/app/event/new") + f"?reference_doctype={doc.doctype}&reference_docname={doc.name}&{filter_field}=1"

        frappe.msgprint(
            f"No {doc.status} event exists for this Lead. Please <a href='{create_event_url}' target='_blank'>create a new event</a> with the required details.",
            title=f"Create {doc.status} Event",
            indicator="orange"
        )
    else:
        # Show existing events in a styled table
        table_html = generate_event_table(events)
        frappe.msgprint(
            f"<b>{doc.status} event(s) already exist for Lead {doc.name}:</b><br>{table_html}",
            title="Existing Events"
        )

def generate_event_table(events):
    # Generate HTML table for events
    table_html = """
        <style>
            .event-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            .event-table th, .event-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            .event-table tr:nth-child(even) { background-color: #f9f9f9; }
            .event-table tr:hover { background-color: #f1f1f1; }
        </style>
        <table class="event-table">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Starts On</th>
                    <th>Sync with Google Calendar</th>
                    <th>Google Calendar</th>
                </tr>
            </thead>
            <tbody>
    """
    for event in events:
        table_html += f"""
            <tr>
                <td>{event['subject']}</td>
                <td>{event['status']}</td>
                <td>{event['starts_on']}</td>
                <td>{'Yes' if event['sync_with_google_calendar'] else 'No'}</td>
                <td>{event['google_calendar'] or 'N/A'}</td>
            </tr>
        """
    table_html += "</tbody></table>"
    return table_html
