const getTab = function() {
    const content = `
        <div class="tab" id="menu-tab">
            <h1>Select food</h1>
            <div class="product">
                <div class="product-image" id="chefburger"></div>
                <h2 class="product-name">Chefburger</h2>
            </div>
            <div class="product">
                    <div class="product-image" id="darkryeburger"></div>
                    <h2 class="product-name">The dark rye burger</h2>
            </div>
            <div class="product">
                    <div class="product-image" id="cheeseburger"></div>
                    <h2 class="product-name">Cheeseburger</h2>
            </div>
            <div class="product">
                    <div class="product-image" id="boxmasteroriginal"></div>
                    <h2 class="product-name">Boxmaster original</h2>
            </div>
            <div class="product">
                    <div class="product-image" id="twisteroriginal"></div>
                    <h2 class="product-name">Twister original</h2>
            </div>
            <div class="product">
                    <div class="product-image" id="hot-dog"></div>
                    <h2 class="product-name">Hot-dog</h2>
            </div>
            <div class="product">
                    <div class="product-image" id="hotwingsbucket-25"></div>
                    <h2 class="product-name">25 hot wings bucket</h2>
            </div>
            <div class="product">
                <div class="product-image" id="teriyakibites"></div>
                <h2 class="product-name">Teriyaki bites</h2>
            </div>
            <div class="product">
                <div class="product-image" id="lunchbox-5-300"></div>
                <h2 class="product-name">Lunchbox 5 for 5$</h2>
            </div>
        </div>
    `
    return content
}

export {getTab}