# Meme Generator

**Individuell inlämningsuppgift — Javascript Ramverk**

En meme-generator byggd med React där du kan välja en bild och lägga till egen text över den.

---

## Om uppgiften

Bygg en meme-generator där användaren kan välja en meme-bild och lägga på egen text i realtid. Tänk igenom komponentstrukturen — t.ex. en komponent för bildval, en för förhandsgranskning och en för textkontroller.

---

## Funktionalitet

- **Välj meme** — en knapp öppnar en komponent med valbara bilder. När en bild valts stängs komponenten och bilden visas.
- **Textfält** — visas endast när en bild är vald. Två inputfält (top/bottom) som uppdaterar texten över bilden i realtid.
- **Rensa text** — fälten kan rensas manuellt, och rensas automatiskt vid bildbyte.
- **Textstorlek** — varje inputfält har en slider för att justera textstorleken individuellt.
- **Ladda ner** — när memen är klar kan användaren ladda ner bilden. Nedladdning är inte möjlig om ingen bild är vald.

---

## Spara och ladda ner

Installera `html2canvas`:

```bash
npm install html2canvas
```

Implementera följande funktion (`.meme` är klassen på elementet som ska omvandlas):

```ts
function saveMeme() {
  const element = document.querySelector(".meme") as HTMLDivElement;
  html2canvas(element).then((canvas) => {
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
```

---

## Bilder

Bilder läggs i `public`-mappen och refereras enligt:

---

## Komponenter

Minst 3 komponenter utöver `App.tsx` ska skapas. All state ska ligga i `App.tsx` — övriga komponenter ska vara "dumma" (lifting state up).

---

## Styling

Valfri teknik och utformning. Någon form av styling krävs så att användaren förstår flödet. Sidan behöver inte vara responsiv.

---

## Kravspecifikation

### G

- [ ] Man kan välja en bild
- [ ] Man kan när som helst byta bild (textfält rensas)
- [ ] När bild är vald visas två inputfält för top- och bottomtext
- [ ] När bild är vald kan man ladda ner memen
- [ ] Textstorlek kan justeras individuellt med slider
- [ ] Minst 3 komponenter utöver `App.tsx`
- [ ] All state i `App.tsx` — resten är dumma komponenter
- [ ] Git och GitHub har använts

### VG

- [ ] Alla G-krav är uppfyllda
- [ ] Ingen text visas direkt — istället finns en knapp "Lägg till text" för att lägga till valfritt antal textfält
- [ ] Texterna ska kunna dras och flyttas med paketet `react-rnd` (endast position hanteras)
- [ ] `Rnd`-komponenten får ha eget lokalt state

---

## Inlämning

Inlämning sker via Google Classroom med länk till GitHub-repo.