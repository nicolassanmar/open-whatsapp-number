(() => {
  // Get the phone number alert
  const phoneNumInput = prompt("Enter the phone number");
  const phoneNumWithoutSpaces = phoneNumInput.replace(/\s/g, "");
  const phoneNumWithoutCountryCode = phoneNumWithoutSpaces.replace("+598", "0");
  const phoneNumWithCountryCode = `598${phoneNumWithoutCountryCode}`;

  // Open the WhatsApp chat in the same tab
  window.open(
    `https://web.whatsapp.com/send/?phone=${phoneNumWithCountryCode}`,
    "_self"
  );
})();
