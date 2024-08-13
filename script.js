function checkSurvey()
{
  const results = []

  for (let i = 0; i < 300; i++){
      const checkHarapan = document.querySelector('.harapan'+i+'#h1')

      if (checkHarapan !== null) {
          checkHarapan.setAttribute('checked', '')
      }

      const checkKepuasan = document.querySelector('.kepuasan'+i+'#k4')

      if (checkKepuasan !== null) {
          checkKepuasan.setAttribute('checked', '')
      }
  }

  return results
}
