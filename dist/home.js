const LoadHomePage = ()=>{
    let body = document.getElementsByTagName('body')[0];
    body.innerHTML = `<header class="main_header">
                            <h1>Restaurant</h1>
                            <nav class="main_nav">
                                <ul>
                                <li class="Home_button">Home</li>
                                <li class="About_button">About</li>
                                <li class="Menu_button">Menu</li>
                                <li class="Contact_buton">Contact</li>              
                                </ul>
                            </nav>
                        </header>
                        <main class="container">
                            <div class="Home_imgs">
                            <div class="div1">
                                <img src="https://static.wixstatic.com/media/189a587f3b713716c6b7c1addd4f8fb4.jpg/v1/fill/w_299,h_482,al_c,q_80,usm_0.66_1.00_0.01/189a587f3b713716c6b7c1addd4f8fb4.jpg" alt="#">
                            </div>
                            <div class="div2">
                                <img src="https://static.wixstatic.com/media/41d000_48ad029824b148e4b7bd13444ad295c9.jpg/v1/fill/w_299,h_225,al_c,q_80,usm_0.66_1.00_0.01/41d000_48ad029824b148e4b7bd13444ad295c9.jpg" alt="#">
                                    <img src="https://static.wixstatic.com/media/41d000_f7ba1019e0d44b4593129810220ca6b3.jpg/v1/fill/w_299,h_225,al_c,q_80,usm_0.66_1.00_0.01/41d000_f7ba1019e0d44b4593129810220ca6b3.webp" alt="#">
                            </div>
                            <div class="div4">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestiae tempore fuga debitis? 
                                    Provident magnam ut veniam nisi quas nulla illo, vero amet tempore neque nam ipsa unde inventore
                                    dolores!
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt debitis voluptates veniam ut 
                                    similique soluta beatae, tempora ex quo voluptatum quas voluptate minus iure? Officia quas quae 
                                    natus expedita. Molestias.
                                </p>
                                </div>
                            </div>
                        </main>`
}
const LoadHomePageContent = ()=>{
    let main = document.getElementsByTagName('main')[0];
    main.classList.remove('container_about');
    main.innerHTML = `<div class="Home_imgs">
                        <div class="div1">
                            <img src="https://static.wixstatic.com/media/189a587f3b713716c6b7c1addd4f8fb4.jpg/v1/fill/w_299,h_482,al_c,q_80,usm_0.66_1.00_0.01/189a587f3b713716c6b7c1addd4f8fb4.jpg" alt="#">
                        </div>
                        <div class="div2">
                            <img src="https://static.wixstatic.com/media/41d000_48ad029824b148e4b7bd13444ad295c9.jpg/v1/fill/w_299,h_225,al_c,q_80,usm_0.66_1.00_0.01/41d000_48ad029824b148e4b7bd13444ad295c9.jpg" alt="#">
                                <img src="https://static.wixstatic.com/media/41d000_f7ba1019e0d44b4593129810220ca6b3.jpg/v1/fill/w_299,h_225,al_c,q_80,usm_0.66_1.00_0.01/41d000_f7ba1019e0d44b4593129810220ca6b3.webp" alt="#">
                        </div>
                        <div class="div4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestiae tempore fuga debitis? 
                                Provident magnam ut veniam nisi quas nulla illo, vero amet tempore neque nam ipsa unde inventore
                                dolores!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt debitis voluptates veniam ut 
                                similique soluta beatae, tempora ex quo voluptatum quas voluptate minus iure? Officia quas quae 
                                natus expedita. Molestias.
                            </p>
                            </div>
                        </div>
                      </div>`
}
export {LoadHomePage,LoadHomePageContent};