function checkSurvey(level)
{
  const results = []

  for (let i = 0; i < 300; i++){
      const checkHarapan = document.querySelector('.harapan'+i+'#h'+level)

      if (checkHarapan !== null) {
          checkHarapan.setAttribute('checked', '')
      }

      const checkKepuasan = document.querySelector('.kepuasan'+i+'#k'+level)

      if (checkKepuasan !== null) {
          checkKepuasan.setAttribute('checked', '')
      }
  }

  return results
}
