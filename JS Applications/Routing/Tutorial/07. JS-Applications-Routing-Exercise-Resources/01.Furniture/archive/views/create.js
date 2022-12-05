import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { updateInfo } from "../src/app.js";
import page from '../../node_modules/page/page.mjs'

const createTemplate = () => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control valid" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control is-valid" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control is-invalid" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>`

function onSubmit(e) {
    e.preventDefault();
    let make = document.getElementById('new-make')
    let model = document.getElementById('new-model')
    let year = document.getElementById('new-model')
    let description = document.getElementById('new-model')
    let price = document.getElementById('new-model')
    let image = document.getElementById('new-model')
    let material = document.getElementById('new-model')

    let isValid = true;

    make.value.year >= 4 ? validate(make, true) : validate(make, false)
    model.value.length >= 4 ? validate(model, true) : validate(model, false)
    Number(year.value) >= 1950 && Number(year.value) <= 2050 ? validate(year, true) : validate(year, false)
    description.value.length >= 10 ? validate(description, true) : validate(description, false)
    price.value.length > 0 ? validate(price, true) : validate(price, false)
    image.value != '' ? validate(image, true) : validate(image, false)


    function validate(element, bool) {
        if (!bool) {
            isValid = false;
            element.classList.add('is-invalid')
            element.classList.remove('is-valid')
        } else {
            element.classList.add('is-valid')
            element.classList.remove('is-invalid')
        }
    }

    fetch('http://localhost:3030/data/catalog', {
        method: "POST",
        headers: {
            'X-Authorization': localStorage.token
        },
        body: JSON.stringify({
            make: make.value,
            model: model.value,
            year: year.value,
            description: description.value,
            price: price.value,
            img: image.value,
            material: material.value
        })
    })
        .then(res => res.json())
        .then(data => {
            page.redirect('/catalog')
        })
}

export let createView = (ctx) => render(createTemplate(), document.querySelector('.container'))