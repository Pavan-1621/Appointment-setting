import { auth, db } from './firebase-config.js';
import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;
  const slot = document.getElementById("slot").value;

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const email = user.email;
      const uid = user.uid;

      try {
        const ref = doc(db, "appointments", uid + "_" + Date.now());

        await setDoc(ref, {
          uid,
          email,
          category,
          date,
          slot,
          status: "demo_booked",
          createdAt: serverTimestamp()
        });

        // ✅ Send confirmation email via EmailJS (already loaded globally in dashboard.html)
        emailjs.send("service_88m8pp8", "__ejs-test-mail-service__", {
          to_email: email,
          to_name: email.split("@")[0],
          category,
          date,
          slot
        }).then(() => {
          console.log("✅ Email sent successfully.");
        }).catch((error) => {
          console.error("❌ Email failed to send:", error);
        });

        alert("✅ Appointment booked successfully!");
        window.location.href = "confirm.html";

      } catch (err) {
        console.error("❌ Firestore Error:", err);
        alert("Error saving your appointment. Please try again.");
      }

    } else {
      alert("Please log in to book an appointment.");
      window.location.href = "index.html";
    }
  });
});
