//when we submit the form page refresh, let's use preventDefault
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.log('SUBMITTED!');
    // next we want to extract whatever user typed in
    // console.dir(form);    //form#searchForm -> elements -> query(name given to input): input
    // console.log(form.elements.query.value);   //save this to a variable- the value
    const searchTerm = form.elements.query.value;  // now we need to make api call
    //call axios
         //const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
         //better way below if we have more key value pair in query string
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    // console.log(res);
    // console.log(res.data);
    // console.log(res.data[0].show.image.medium); 
    // give url of image, now i want to display that image
    // const img = document.createElement('IMG');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img);
    // this will give one image, for more we just loop over res.data
    // make a separate function and call that function
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {   // expect an array of shows
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
            //getting images but with an error
            //Uncaught (in promise) TypeError: Cannot read properties of null (reading 'medium')
            //means there's no medium on image - images->null, so let's use an if statement
        }
    }
}