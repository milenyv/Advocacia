
    function showTab(tabId) {
      document.querySelectorAll('.card-container').forEach(el => el.classList.add('hidden'));
      document.getElementById(tabId).classList.remove('hidden');
  
      document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
      event.target.classList.add('active');
    }