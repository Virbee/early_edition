import React from "react";

function Contact() {
  return (
    <div className="form">
      <form>
        <label>Objet :</label>
        <input type="text" />
        <label>Message</label>
        <textarea
          placeholder="Bonjour, Je vous contacte afin de ..."
          rows="10"
          cols="33"
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Contact;
