frappe.views.calendar['CRM Task'] = {
 field_map: {
 start: 'starts_on',
 end: 'ends_on',
 id: 'name',
 allDay: 'all_day',
 title: 'subject',
 status: 'event_type',
 color: 'color'
 },
 style_map: {
 Public: 'success',
 Private: 'info'
 },
 order_by: 'ends_on',
 get_events_method: 'frappe.desk.doctype.event.event.get_events'
}
