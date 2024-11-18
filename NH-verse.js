document.querySelector(".btn1 button").addEventListener("click", () => {
    const name = document.querySelector("#username").value;
    const usn = document.querySelector("#usn").value;

    if (name.trim() === "" || usn.trim() === "") {
      alert("Fill both username and USN.");
    } else {
      alert("Registration successful");
    }
});

document.querySelector(".btn2 button").addEventListener("click", () => {
    const email = document.querySelector("#email").value;
    const text = document.querySelector(".ask .enter-mail textarea").value;

    if (email.trim() === "" || text.trim() === "") {
      alert("Fill both Email and Message.");
    } else {
      alert("Message sent");
    }
});
