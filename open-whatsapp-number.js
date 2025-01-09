(() => {
  // Get the phone number alert
  const phoneNumber = prompt("Enter the phone number");
  const phoneNumberWithoutSpaces = phoneNumber.replace(/\s/g, "");
  const phoneNumberWithoutCountryCode = phoneNumberWithoutSpaces.replace(
    "+598",
    "0"
  );
  const phoneNumberWithCountryCode = `598${phoneNumberWithoutCountryCode}`;

  // Open the WhatsApp chat in the same tab
  window.open(
    `https://web.whatsapp.com/send/?phone=${phoneNumberWithCountryCode}`,
    "_self"
  );
})();
