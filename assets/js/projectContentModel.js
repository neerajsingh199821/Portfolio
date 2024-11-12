
  // Function to  open the Project 1 modal
  function openProjectContentModal(projectId) {
    document.getElementById(`project_${projectId}_content`).style.display = "block";
  }

  // Function to   close the Project 1 modal
  function closeProjectContentModal(projectId) {
    document.getElementById(`project_${projectId}_content`).style.display = "none";
  }


  // Close modal when clicking outside the modal content
  window.onclick = function(event) {
    const modals = document.getElementsByClassName("project-content");
    for (let modal of modals) {
      const projectModal = modal.querySelector(".modal");
      if (event.target === modal || event.target === projectModal) {
        modal.style.display = "none";
      }
    }
  };
  


