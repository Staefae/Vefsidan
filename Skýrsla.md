# Skýrsla um vefkerfið

## Um Stæfæ
Stæfæ er vefsíðan sem við bjuggum til fyrir þennan áfanga, en á Stæfæ geturðu fengið random stærðfræðidæmi, reiknað þau, og tékkað hvort svarið hafi verið rétt.

## Vinnsla
Við náðum að gera næstum allt sem við ætluðum að gera, okkur gekk mjög vel í að forrita vefsíðuna, og eins og staðan er núna, þá er mjög auðvelt að bæta við köflum/dæmum, og maður er ekki lengi að því, nema maður þarf bara að forrita hvernig dæmin eru í raun reiknuð og stilla upp hvernig þau eru sýnd.

## Kerfið
Við ætluðum að nota framework eins og Vue en verkefnið þróaðist þannig að Vue varð óþarfi, enda var lítið sem ekkert mál að nota bara plain javascript með libraries fyrir hluti sem við þurftum.
Vefsíðan er bara með eina síðu tæknilega séð, og þessi síða byggir aðallega á JavaScript, og takkarnir hafa virkni sem breyta allri síðunni. Dæmin, undirsíðurnar sem koma eru alveg byggðar á klösum sem heita "Formúla" og kemur út script'u sem JavaScript load'ar og keyrir, í "Formula" klasanum eru föllin "svar" og "render", en "render" er til að birta dæmið, og "svar" til að gá hvort svarið sem notandinn senti inn hafi verið rétt eða ekki.

## Libraries
Library'in sem við notuðum í verkefninu eru:
1. **[Materialize](https://materializecss.com/)**, fyrir útlitið 
2. **[jQuery](https://jquery.com/download/)** (Materialize notar jQuery í javascript kóðanum sínum svo við þurftum að setja inn jQuery inn)
3. **[MathJax](https://www.mathjax.org/)**, til að sýna dæmin
4. **[MathJS](https://mathjs.org/)**, til að reikna öll dæmi alveg rétt, og breyta dæmum í LaTeX streng (fyrir rendering)
5. **[MathQuill](http://mathquill.com/)**, fyrir input, en við vildum gera HTML input sem gæti sett textann upp eins og við séum að skrifa á blaði
