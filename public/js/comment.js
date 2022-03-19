async function addcommentsFormHandler(event) {
    event.preventDefault();

    const comments = document.querySelector('textarea[name="adding-comments"]').value.trim();
    const course_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comments) {
        const response = await fetch('/comment', {
            method: 'POST',
            body: JSON.stringify({
                comments,
                course_id
            
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.add-comment').addEventListener('submit', addcommentsFormHandler);