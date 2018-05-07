const LoadAboutContent = ()=>{
    let main = document.getElementsByTagName('main')[0];
    main.classList.add('container_about');
    main.innerHTML = `  <div class="about1">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur saepe officia, molestiae exceptu
                            ri explicabo quisquam delectus nequ doloribus aperiam officiis, autem illum modi blanditiis necessitatibus!
                            e similique fugiat quas. Molestias
                            </p>
                        </div>
                        <div class="about2">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur saepe officia, molestiae exceptu
                            ri explicabo quisquam delectus nequ doloribus aperiam officiis, autem illum modi blanditiis necessitatibus!
                            e similique fugiat quas. Molestias
                        </p>
                        </div>
                        <div class="about3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur saepe officia, molestiae exceptu
                            ri explicabo quisquam delectus nequ doloribus aperiam officiis, autem illum modi blanditiis necessitatibus!
                            e similique fugiat quas. Molestias
                        </p>
                        </div>`
}
export {LoadAboutContent};