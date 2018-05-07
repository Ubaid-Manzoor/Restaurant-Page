const LoadContacts = ()=>{
    let main = document.getElementsByTagName('main')[0];
    main.classList.add('container_contact');
    main.innerHTML = `  <div> 
                            <p> Contact Us On</p>
                                
                            <p>111-222-333</p>
                        </div>`;
}
export {LoadContacts};