const getTab = function() {
    const content = `
        <div class="tab" id="find-us">
            <h1>Restaurants</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d65624.19650208417!2d30.3026907581113!3d59.879758598052526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKFC!5e0!3m2!1sru!2sru!4v1540215389676" id="restaurants-map" frameborder="0" allowfullscreen></iframe>                
        </div>
    `
    return content
}

export {getTab}