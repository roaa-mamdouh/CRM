def convert_to_deal(lead_name):
    # Fetch the lead document
    lead = frappe.get_doc("Lead", lead_name)
    
    # Create a new deal document
    deal = frappe.get_doc({
        "doctype": "Deal",
        "lead": lead.name,
        "client_name": lead.client_name,
        "contact_number": lead.contact_number,
        "email_id": lead.email_id,
        "status": "Open",
        "deal_value": lead.estimated_value,
        "notes": "Converted from Lead"
    })
    deal.insert(ignore_permissions=True)
    
    return deal.name