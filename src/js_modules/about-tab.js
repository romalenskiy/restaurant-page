const getTab = function() {
    const content = `
        <div class="tab" id="about-tab">
            <h1>Kentucky Fried Chicken</h1>
            <div class="about-us">
                <div class="about-us-description">
                    <img src="img/fried-chicken.svg" alt="Chicken" class="about-us-icon">
                    <h2>100% Chicken</h2>
                    <p>Labore sit dolor aliquip sunt do ea voluptate excepteur Lorem fugiat cillum ad ut anim. Cupidatat veniam ipsum enim laboris occaecat sint ex reprehenderit pariatur ullamco voluptate et eiusmod.</p>
                </div>
                <div class="about-us-description">
                    <img src="img/pepper.svg" alt="Spices" class="about-us-icon">
                    <h2>11 Herbs and Spices</h2>
                    <p>Aliqua sit nulla ipsum anim mollit duis incididunt ex ullamco deserunt dolore laborum officia. Esse cillum proident aliquip consectetur sunt est aliqua tempor.</p>
                </div>
                <div class="about-us-description">
                    <img src="img/maps-and-flags.svg" class="about-us-icon" alt="Worldwide company">
                    <h2>A Company with a Worldwide Reputation</h2>
                    <p>Commodo nostrud pariatur Lorem ut eu irure commodo exercitation mollit ullamco enim ad. Ex incididunt deserunt nulla aliqua aute pariatur non aliquip consequat et dolor.</p>
                </div>
            </div>
        </div>
    `
    return content
}

export {getTab}