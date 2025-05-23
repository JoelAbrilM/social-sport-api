# social-sport-api

# 📘 Guía de los 100 Comandos Más Usados en Git

Esta guía recopila los 100 comandos más utilizados en Git, organizados por categorías para facilitar su consulta. ¡Copia y pega directamente en tu README.md!

---

## 🛠️ Configuración Inicial

1. **`git config --global user.name "Tu Nombre"`**  
   Establece tu nombre de usuario para todos los repositorios. ✍️

2. **`git config --global user.email "tuemail@example.com"`**  
   Configura tu correo electrónico para todos los repositorios. 📧

3. **`git config --list`**  
   Muestra todas las configuraciones actuales de Git. 🔍

4. **`git config --global core.editor "nombre_editor"`**  
   Define el editor de texto predeterminado para Git. 📝

5. **`git config --global merge.tool "nombre_herramienta"`**  
   Establece la herramienta de merge predeterminada. 🔧

6. **`git config --global alias.co checkout`**  
   Crea un alias para simplificar comandos. ⚡

7. **`git config --global color.ui auto`**  
   Habilita la coloración automática en la salida de Git. 🌈

8. **`git config --global init.defaultBranch main`**  
   Define "main" como la rama principal por defecto. 🌿

9. **`git config --global credential.helper cache`**  
   Activa el almacenamiento en caché de credenciales. 🔒

10. **`git config --global push.default simple`**  
    Configura el comportamiento predeterminado de push. 🚀

---

## 📁 Creación y Clonación de Repositorios

11. **`git init`**  
    Inicializa un nuevo repositorio Git en el directorio actual. 📂

12. **`git init nombre_directorio`**  
    Crea un nuevo repositorio en el directorio especificado. 📁

13. **`git clone url_repositorio`**  
    Clona un repositorio remoto en tu máquina local. 🌐

14. **`git clone url_repositorio nombre_directorio`**  
    Clona un repositorio en un directorio específico. 📥

15. **`git clone --depth 1 url_repositorio`**  
    Clona solo la última versión del repositorio. 🕒

16. **`git clone --branch nombre_rama url_repositorio`**  
    Clona una rama específica del repositorio. 🌿

17. **`git clone --mirror url_repositorio`**  
    Clona un repositorio incluyendo todas las referencias. 🔄

18. **`git clone --bare url_repositorio`**  
    Clona un repositorio sin el directorio de trabajo. 🗃️

19. **`git remote add origin url_repositorio`**  
    Agrega un repositorio remoto llamado "origin". 🏷️

20. **`git remote -v`**  
    Muestra las URLs de los repositorios remotos configurados. 👀

---

## 📄 Gestión de Archivos

21. **`git add archivo`**  
    Agrega un archivo al área de preparación. ➕

22. **`git add .`**  
    Agrega todos los archivos modificados al área de preparación. 📥

23. **`git add -A`**  
    Agrega todos los cambios (nuevos, modificados, eliminados). ✔️

24. **`git add -u`**  
    Agrega solo archivos rastreados modificados o eliminados. 📑

25. **`git rm archivo`**  
    Elimina un archivo del área de trabajo y del índice. ❌

26. **`git rm --cached archivo`**  
    Elimina un archivo del índice pero lo mantiene en el directorio. 🗂️

27. **`git mv archivo_antiguo archivo_nuevo`**  
    Renombra o mueve un archivo. 🔀

28. **`git clean -f`**  
    Elimina archivos no rastreados del directorio de trabajo. 🧹

29. **`git clean -fd`**  
    Elimina archivos y directorios no rastreados. 🧼

30. **`git clean -n`**  
    Muestra qué archivos serían eliminados con clean. 👓

---

## 📝 Confirmaciones (Commits)

31. **`git commit -m "mensaje"`**  
    Crea un commit con el mensaje especificado. 📝

32. **`git commit -a -m "mensaje"`**  
    Agrega y confirma todos los archivos rastreados modificados. ⚡

33. **`git commit --amend`**  
    Modifica el último commit. 🔄

34. **`git commit --amend -m "mensaje"`**  
    Reemplaza el mensaje del último commit. 🖊️

35. **`git commit --amend --no-edit`**  
    Modifica el último commit sin cambiar el mensaje. ✏️

36. **`git commit --allow-empty -m "mensaje"`**  
    Crea un commit vacío con un mensaje. 📦

37. **`git commit --author="Nombre <email>" -m "mensaje"`**  
    Crea un commit con un autor específico. 👤

38. **`git commit -S -m "mensaje"`**  
    Firma el commit con GPG. 🔐

39. **`git commit --dry-run`**  
    Muestra qué se incluiría en un commit sin hacerlo. 💭

40. **`git commit --verbose`**  
    Muestra los cambios que se incluirán en el commit. 📣

---

## 🔍 Inspección y Comparación

41. **`git status`**  
    Muestra el estado actual del repositorio. 📊

42. **`git diff`**  
    Muestra las diferencias no preparadas entre archivos. 🆚

43. **`git diff --staged`**  
    Muestra las diferencias entre el área de preparación y el último commit. 📋

44. **`git diff archivo`**  
    Muestra las diferencias de un archivo específico. 📄

45. **`git log`**  
    Muestra el historial de commits. 📜

46. **`git log --oneline`**  
    Muestra el historial en una línea por commit. 🏷️

47. **`git log --graph`**  
    Muestra el historial como un gráfico. 🌳

48. **`git log --stat`**  
    Muestra estadísticas de archivos modificados en cada commit. 📈

49. **`git show`**  
    Muestra información detallada de un objeto Git. 🔍

50. **`git blame archivo`**  
    Muestra quién modificó cada línea de un archivo. 👀

---

## 🌿 Ramas (Branches)

51. **`git branch`**  
    Lista todas las ramas locales. 🌿

52. **`git branch nombre_rama`**  
    Crea una nueva rama. ➕

53. **`git branch -d nombre_rama`**  
    Elimina una rama local. 🗑️

54. **`git branch -D nombre_rama`**  
    Fuerza la eliminación de una rama local. 💥

55. **`git branch -m nuevo_nombre`**  
    Renombra la rama actual. ✏️

56. **`git branch -a`**  
    Lista todas las ramas locales y remotas. 🌎

57. **`git branch -r`**  
    Lista todas las ramas remotas. 📡

58. **`git checkout nombre_rama`**  
    Cambia a la rama especificada. 🔀

59. **`git checkout -b nombre_rama`**  
    Crea y cambia a una nueva rama. 🚀

60. **`git switch nombre_rama`**  
    Cambia a la rama especificada (Git 2.23+). 🔄

---

## 🔄 Fusionar y Rebase

61. **`git merge nombre_rama`**  
    Fusiona la rama especificada en la rama actual. 🤝

62. **`git merge --no-ff nombre_rama`**  
    Realiza una fusión sin avance rápido. 🚧

63. **`git merge --squash nombre_rama`**  
    Combina todos los commits de la rama en uno solo. 🔨

64. **`git rebase rama_base`**  
    Re-aplica commits sobre otra base. 🧱

65. **`git rebase --interactive HEAD~n`**  
    Rebase interactivo para limpiar commits. 🛠️

66. **`git rebase --abort`**  
    Cancela un rebase en curso. 🚫

67. **`git rebase --continue`**  
    Continúa un rebase después de resolver conflictos. ▶️

68. **`git rebase --skip`**  
    Omite el patch actual durante el rebase. ⏭️

69. **`git pull --rebase`**  
    Combina fetch y rebase en lugar de merge. 🔄

---

## 🔄 Actualizar y Compartir

70. **`git fetch`**  
    Descarga objetos y refs del remoto. ⬇️

71. **`git fetch --all`**  
    Descarga todos los remotos. 🌐

72. **`git fetch origin nombre_rama`**  
    Trae cambios de una rama remota específica. 🔄

73. **`git pull`**  
    Descarga y fusiona cambios del remoto. 🔄

74. **`git pull origin main`**  
    Trae y fusiona la rama main del remoto. 🌿

75. **`git pull --ff-only`**  
    Solo admite fast-forward merges. ⚡

76. **`git push`**  
    Envía tus commits al remoto por defecto. 🚀

77. **`git push origin main`**  
    Envía la rama main al remoto. 📤

78. **`git push -u origin nueva_rama`**  
    Envía una nueva rama y la rastrea. 📌

79. **`git push origin --delete nombre_rama`**  
    Elimina una rama remota. 🗑️

---

## 🧰 Stashing

80. **`git stash`**  
    Guarda cambios sin comprometerlos. 💼

81. **`git stash save "mensaje"`**  
    Guarda cambios con un nombre. 🏷️

82. **`git stash list`**  
    Lista todos los stashes. 📋

83. **`git stash show`**  
    Muestra el stash más reciente. 👀

84. **`git stash show -p`**  
    Muestra el diff del stash. 📝

85. **`git stash apply`**  
    Aplica el stash más reciente. ▶️

86. **`git stash pop`**  
    Aplica y elimina el stash. 🎉

87. **`git stash drop`**  
    Elimina un stash específico. ❌

88. **`git stash clear`**  
    Elimina todos los stashes. 🧹

---

## 🔖 Etiquetas (Tags)

89. **`git tag nombre_tag`**  
    Crea una etiqueta ligera. 🏷️

90. **`git tag -a nombre_tag -m "mensaje"`**  
    Crea una etiqueta anotada. 📝

91. **`git tag -d nombre_tag`**  
    Elimina una etiqueta local. 🗑️

92. **`git push origin --tags`**  
    Envía todas las etiquetas al remoto. 🚀

93. **`git push origin nombre_tag`**  
    Envía una etiqueta específica. 📤

94. **`git show nombre_tag`**  
    Muestra detalles de una etiqueta. 🔍

---

## ⚙️ Utilidades Avanzadas

95. **`git bisect start`**  
    Inicia una búsqueda binaria de errores. 🔎

96. **`git bisect good commit`**  
    Marca un commit como bueno. ✅

97. **`git bisect bad commit`**  
    Marca un commit como malo. ❌

98. **`git reflog`**  
    Muestra el historial de HEAD y refs. 🕒

99. **`git gc`**  
    Limpia y optimiza el repositorio. 🧹

100. **`git archive --format=zip -o archivo.zip HEAD`**  
     Empaqueta el estado actual en un ZIP. 📦

---
