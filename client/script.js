const btn = document.getElementById('up'); // Upload button element
const formdata = new FormData(document.forms[0]) // Form data for POST request

// Event handler for file upload
const upload = () => {
    axios.post('/',formdata).then(res => {
        console.log('Success!');
    }
    ).catch(err => console.log(err))
}
// Assign event handler
btn.onclick = upload;