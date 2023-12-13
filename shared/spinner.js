function displayLoadingSpinner() {
    const allTodosDiv = document.querySelector('.todos');
    const loadingSpinnerDiv = document.createElement('div');
    loadingSpinnerDiv.classList.add('loading-spinner');
    allTodosDiv.appendChild(loadingSpinnerDiv);
}

function stopDisplayingLoadingSpinner() {
    const loadingSpinnerDiv = document.querySelector('.loading-spinner');
    loadingSpinnerDiv.remove();
}