import frappe
from frappe.utils import cint


def assign_lead_to_sales_group(doc, method):
    """
    Assign a lead to a user with a specific role profile (e.g., "Sales") only when the lead is first created.
    Ensures load balancing among users and excludes absent users.
    """
    if doc.is_new() and not doc.lead_owner:  # Only assign if the lead is new and lead_owner is empty
        # Check if this lead is being imported via the Data Import doctype
        active_import = frappe.db.get_value(
            "Data Import",
            {
                "status": ["in", ["Pending", "In Progress"]],
                "reference_doctype": "CRM Lead"
            },
            ["name", "automatic_assignment"],
            as_dict=True
        )

        if active_import:
            # If automatic_assignment is explicitly False, skip assignment
            if not active_import.automatic_assignment:
                frappe.msgprint(
                    msg="Manual assignment mode: Lead owner not automatically assigned.",
                    title="Lead Assignment",
                    indicator="blue",
                    alert=True,
                )
                return
        
        # If we're not in an import context, or automatic assignment is enabled,
        # proceed with automatic assignment logic
        sales_users = frappe.get_all(
            "User",
            filters={
                "role_profile_name": "Sales",
                "enabled": 1,
                "is_absent": 0,  # Exclude users marked as absent
            },
            fields=["name"],
        )

        if not sales_users:
            frappe.throw("No available users found with the 'Sales' role profile.")

        # Extract user names
        sales_usernames = [user["name"] for user in sales_users]

        # Get the count of leads assigned to each user
        lead_counts = {
            user: cint(
                frappe.db.count(
                    "CRM Lead",
                    filters={"lead_owner": user}
                )
            )
            for user in sales_usernames
        }

        # Find the user with the minimum number of leads assigned
        least_loaded_user = min(lead_counts, key=lead_counts.get)

        # Assign the lead to this user
        doc.lead_owner = least_loaded_user
        frappe.msgprint(
            msg=f"Lead assigned to {least_loaded_user} for load balancing.",
            title="Lead Assignment",
            indicator="green",
            alert=True,
        )
