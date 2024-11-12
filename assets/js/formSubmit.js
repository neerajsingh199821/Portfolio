
  // Function to open the modal
  function openFormModal() {
    document.getElementById("formModal").style.display = "block";
  }

  // Function to close the modal
  function closeFormModal() {
    document.getElementById("formModal").style.display = "none";
  }

  // Close modal when clicking outside the modal content
  window.onclick = function(event) {
    const modal = document.getElementById("formModal");
    const submitNotificationWrapper = document.getElementById("submitNotificationWrapper");
    if (event.target === modal || event.target === submitNotificationWrapper) {
      modal.style.display = "none";
    }
  };

 
  


