const loadingContainer = document.createElement('div');
loadingContainer.style.position = 'fixed';
loadingContainer.style.top = '50%';
loadingContainer.style.left = '50%';
loadingContainer.style.transform = 'translate(-50%, -50%)';
loadingContainer.style.zIndex = '1000';
loadingContainer.style.display = 'none';
loadingContainer.style.background = 'rgba(0, 0, 0, 0.1)';
loadingContainer.style.padding = '20px';
loadingContainer.style.borderRadius = '8px';

const spinner = document.createElement('div');
spinner.style.width = '50px';
spinner.style.height = '50px';
spinner.style.border = '5px solid #e0e0e0';
spinner.style.borderTop = '5px solid #2D7C59';
spinner.style.borderRadius = '50%';
spinner.style.animation = 'spin 1.2s linear infinite';

const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'rgba(0, 0, 0, 0.3)';
overlay.style.zIndex = '999';
overlay.style.display = 'none';

const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

document.head.appendChild(styleSheet);
loadingContainer.appendChild(spinner);
document.body.appendChild(overlay);
document.body.appendChild(loadingContainer);

function startLoading() {
  overlay.style.display = 'block';
  loadingContainer.style.display = 'block';
  spinner.style.animation = 'spin 1.2s linear infinite, fadeIn 0.3s ease-in';
}

function stopLoading() {
  spinner.style.animation = 'spin 1.2s linear infinite, fadeOut 0.3s ease-out';
  setTimeout(() => {
    loadingContainer.style.display = 'none';
    overlay.style.display = 'none';
  }, 300);
}

// Example usage: Call startLoading() to show, stopLoading() to hide
startLoading();