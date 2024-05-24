const btn_nubank = document.querySelector('.btn-nubank')
const list_btn_faleComigo = document.querySelectorAll('.btn-faleComigo')
const urlNubank = 'https://checkout.nubank.com.br/CEjEhMSnPv10f8fw'
const urlFaleComigo = 'https://api.whatsapp.com/send?phone=5571993463432&text=Olá%20Rosane!%20Tenho%20interesse%20na%20Mentoria%20de%20Carreira.'

function openUrl (url) {
    window.open(url, '_blank')
}

btn_nubank.addEventListener('click', () => {
   openUrl(urlNubank)
})

for(let i = 0; i < list_btn_faleComigo.length; i++) {

    const btn_faleComigo = list_btn_faleComigo[i]

    btn_faleComigo.onclick = () => {
        openUrl(urlFaleComigo)
    }
}
