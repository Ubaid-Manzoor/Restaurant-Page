const LoadMenu = ()=>{
    let main = document.getElementsByTagName('main')[0];
    main.classList.add('container_Menu');
    main.innerHTML = ` <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                            <li>item 6</li>
                        </ul>`
}
export {LoadMenu};