import frappe
from frappe.utils import cint

def assign_lead_to_sales_group(doc, method):
    """
    Assign a lead to a user with a specific role profile (e.g., "Sales") only when the lead is first created.
    Ensures load balancing among users.
    """
    if doc.is_new() and not doc.lead_owner:  # Only assign if the lead is new and lead_owner is empty
        # Get all users with the "Sales" role profile
        sales_users = frappe.get_all(
            "User",
            filters={"role_profile_name": "Sales", "enabled": 1},
            fields=["name"],
        )

        if not sales_users:
            frappe.throw("No users found with the 'Sales' role profile.")

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
