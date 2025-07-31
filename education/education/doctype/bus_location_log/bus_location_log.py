# Copyright (c) 2025, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import education as edu
from frappe.realtime import get_website_room


class BusLocationLog(Document):
	
	def on_change(self):
		self.publish_update()

	def publish_update(self):
		print("Publishing update for Bus Location Log")
		# student_user = frappe.db.get_value("Student", self.student, "user_id", cache=True)
		edu.refetch_resource("UnreadItems", user=self.user)