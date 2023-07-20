$(document).ready(function(){

    // Llenar tabla pedorra
    async function fillTable() {
        const res = await fetch("json/autocomplete.json");
        const data = await res.json();
        let template = "";

        data.forEach(hotel => {
            template += `
                <tr id="${hotel.codigo}">
                    <td>${hotel.codigo}</td>
                    <td>${hotel.marca}</td>
                    <td>${hotel.label}</td>
                    <td>
                        <button class="button button-primary button-edit" data-codigo="${hotel.codigo}" data-marca="${hotel.marca}" data-label="${hotel.label}">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </button>
                        <button class="button button-secondary ml-10 button-delete" data-codigo="${hotel.codigo}">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </td>
                </tr>
            `;
            $('#table_hotels').html(template);
        });
    }
    fillTable();
    
    // Table Edit
    $(document.body).on('click', '.button-edit' ,function(){
        let codigo = $(this).attr("data-codigo");
        let marca = $(this).attr("data-marca");
        let nombre = $(this).attr("data-label");
        $('#input-codigo').val(codigo)
        $('#input-codigo-actual').val(codigo)
        $('#input-marca').val(marca)
        $('#input-marca').val(marca)
        $('#input-nombre').val(nombre)
        $('.modal').show();
    });
   
    // Table Delete
    $(document.body).on('click', '.button-delete' ,function(){
        let codigo = $(this).attr("data-codigo");
        $("#" + codigo).remove();
    });
})    

// Modal Cancel
function hideModal(event){
    event.preventDefault();
    $('.modal').hide();
}

// Modal Save
function saveModal(event){
    event.preventDefault();

    let codigo = $('#input-codigo').val()
    let codigoActual = $('#input-codigo-actual').val()
    let marca = $('#input-marca').val()
    let label = $('#input-nombre').val()

    template = `
        <tr id="${codigo}">
            <td>${codigo}</td>
            <td>${marca}</td>
            <td>${label}</td>
            <td>
                <button class="button button-primary button-edit" data-codigo="${codigo}" data-marca="${marca}" data-label="${label}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </button>
                <button class="button button-secondary ml-10 button-delete" data-codigo="${codigo}" data-marca="${marca}" data-label="${label}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </td>
        </tr>
    `;

    $("#" + codigoActual).replaceWith(template);
    $('.modal').hide();
}