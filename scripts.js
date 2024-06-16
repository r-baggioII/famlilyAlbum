document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    let currentPage = 0;

    const updateBook = () => {
        pages.forEach((page, index) => {
            if (index <= currentPage) {
                page.style.transform = 'rotateY(-180deg)';
                page.style.zIndex = pages.length - index;
            } else {
                page.style.transform = 'rotateY(0)';
                page.style.zIndex = index;
            }
        });
    };

    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateBook();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updateBook();
        }
    });

    // Initialize the book with the first page
    updateBook();
});
