import frappe

def mark_duplicates(doc, method):
    # Check for duplicate phone numbers
    duplicate_leads = frappe.get_all(
        "CRM Lead",
        filters={
            "phone": doc.phone,
            "name": ["!=", doc.name]  # Exclude the current document
        },
        fields=["name", "lead_owner"]
    )

    if duplicate_leads:
        # Update the 'duplicated' field
        doc.duplicated = 1
        # Notify about the duplicate
        frappe.msgprint(
            msg=f"Phone number already exists for Lead {duplicate_leads[0]['name']}. Lead Owner is {duplicate_leads[0]['lead_owner']}.",
            indicator="orange",
            alert=True
        )
