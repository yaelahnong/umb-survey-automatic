// PASTE CODE BELOW IN CONSOLE TAB WHEN OPENING UMB SURVEY
function checkSurvey(level)
{
  const results = []

  for (let i = 0; i < 300; i++){
    const row = document.querySelector(⁠`.harapan${i}#h${level}`);
  
    if (row !== null){
      row.setAttribute('checked', '')
    }
  }

  return results
}
