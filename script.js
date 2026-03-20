function selectAllSurvey()
{
  const listHarapan = document.querySelectorAll('select[name="harapan[]"]');
  const listKepuasan = document.querySelectorAll('select[name="kepuasan[]"]');

  for (let i = 0; i < 300; i++){
    if (listHarapan[i] !== undefined) {
      const pilihanHarapan = listHarapan[i].querySelector('option[value="3"]');

      if (pilihanHarapan !== null) {
          pilihanHarapan.setAttribute('selected', '')
      }
    }

    if (listKepuasan[i] !== undefined) {
      const pilihanKepuasan = listKepuasan[i].querySelector('option[value="3"]');

      if (pilihanKepuasan !== null) {
          pilihanKepuasan.setAttribute('selected', '')
      }
    }
  }
}
selectAllSurvey()
document.querySelector('.next-btn').click()
document.querySelector('.next-btn').click()
document.querySelector('.next-btn').click()
document.querySelector('.next-btn').click()
document.querySelector('.next-btn').click()
document.querySelector('.next-btn').click()
document.querySelector('.next-btn').click()
document.querySelector('.next-btn').click()
document.querySelector('.next-btn').click()
document.querySelector('#save-quisioner-mahasiswa').click()
