# Mensaje WhtasApp Uruguay

Genera un bookmarklet para enviar un mensaje de WhatsApp a un número de teléfono de Uruguay.

Bookmarklet actual:

```
javascript:(()%20%3D%3E%20%7B%0A%20%20%2F%2F%20Get%20the%20phone%20number%20alert%0A%20%20const%20phoneNumber%20%3D%20prompt(%22Enter%20the%20phone%20number%22)%3B%0A%20%20const%20phoneNumberWithoutSpaces%20%3D%20phoneNumber.replace(%2F%5Cs%2Fg%2C%20%22%22)%3B%0A%20%20const%20phoneNumberWithoutCountryCode%20%3D%20phoneNumberWithoutSpaces.replace(%0A%20%20%20%20%22%2B598%22%2C%0A%20%20%20%20%220%22%0A%20%20)%3B%0A%20%20const%20phoneNumberWithCountryCode%20%3D%20%60598%24%7BphoneNumberWithoutCountryCode%7D%60%3B%0A%0A%20%20%2F%2F%20Open%20the%20WhatsApp%20chat%20in%20the%20same%20tab%0A%20%20window.open(%0A%20%20%20%20%60https%3A%2F%2Fweb.whatsapp.com%2Fsend%2F%3Fphone%3D%24%7BphoneNumberWithCountryCode%7D%60%2C%0A%20%20%20%20%22_self%22%0A%20%20)%3B%0A%7D)()%3B%0A

```
