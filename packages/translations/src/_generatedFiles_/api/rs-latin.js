export default {
  authentication: {
    account: 'Nalog',
    apiKey: 'API ključ',
    enableAPIKey: 'Omogući API ključ',
    loggedInChangePassword:
      'Da biste promenili lozinku, otvorite svoj <0>nalog</0> i promenite lozinku.',
    newAccountCreated:
      'Novi nalog je kreiran. Pristupite nalogu klikom na <a href="{{serverURL}}">{{serverURL}}</a>. Molimo Vas kliknite na sledeći link ili zalepite URL koji se nalazi ispod u pretraživač da biste potvrdili adresu e-pošte: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Nakon što potvrdite adresu e-pošte možete se ulogovati.',
    resetYourPassword: 'Promeni svoju lozinku',
    verified: 'Potvrđeno',
    verifyYourEmail: 'Potvrdi svoju adresu e-pošte',
    youAreReceivingResetPassword:
      'Primili ste ovo pošto ste Vi (ili neko u vaše ime) zatražili promenu lozinke naloga. Molimo Vas kliknite na link ili zalepite URL u svoj pretraživač da biste završili proces:',
    youDidNotRequestPassword:
      'Ako niste zatražili promenu lozinke ignorišite ovu poruku i lozinka će ostati nepromenjena.',
  },
  error: {
    deletingFile: 'Dogodila se greška pri brisanju datoteke.',
    emailOrPasswordIncorrect: 'Adresa e-pošte ili lozinka su neispravni.',
    followingFieldsInvalid_one: 'Ovo polje je nevalidno:',
    followingFieldsInvalid_other: 'Ova polja su nevalidna:',
    noFilesUploaded: 'Nijedna datoteka nije učitana.',
    notAllowedToPerformAction: 'Nemate dozvolu za izvršenje ove radnje.',
    problemUploadingFile: 'Postoji problem pri učitavanju datoteke.',
    unableToDeleteCount: 'Nije moguće izbrisati {{count}} od {{total}} {{label}}.',
    unableToUpdateCount: 'Nije moguće ažurirati {{count}} od {{total}} {{label}}.',
    unauthorized: 'Niste autorizovani da biste uputili ovaj zahtev.',
    userLocked: 'Ovaj korisnik je zaključan zbog prevelikog broja neuspešnih pokušaja prijave.',
    valueMustBeUnique: 'Vrednost mora biti jedinstvena.',
  },
  fields: {
    chooseBetweenCustomTextOrDocument:
      'Izaberite između unosa prilagođenog teksta URL ili linka na drugi dokument.',
    chooseDocumentToLink: 'Odaberite dokument koji želite linkovati.',
    customURL: 'Prilagođeni URL',
    enterURL: 'Unesi URL',
    internalLink: 'Interni link',
    linkType: 'Tip linka',
    openInNewTab: 'Otvori u novoj kartici.',
    textToDisplay: 'Tekst za prikaz',
  },
  general: {
    copy: 'Kopiraj',
    createdAt: 'Kreirano u',
    deletedCountSuccessfully: 'Uspešno izbrisano {{count}} {{label}}.',
    deletedSuccessfully: 'Uspešno izbrisano.',
    email: 'E-pošta',
    notFound: 'Nije pronađeno',
    row: 'Red',
    rows: 'Redovi',
    successfullyCreated: '{{label}} uspešno kreirano.',
    successfullyDuplicated: '{{label}} uspešno duplicirano.',
    thisLanguage: 'Srpski (latinica)',
    updatedAt: 'Ažurirano u',
    updatedCountSuccessfully: 'Uspešno ažurirano {{count}} {{label}}.',
    updatedSuccessfully: 'Uspešno ažurirano.',
    user: 'Korisnik',
    users: 'Korisnici',
    value: 'Vrednost',
  },
  upload: {
    fileName: 'Ime datoteke',
    fileSize: 'Veličina datoteke',
    height: 'Visina',
    sizes: 'Veličine',
    width: 'Širina',
  },
  validation: {
    emailAddress: 'Molimo Vas unesite validnu email adresu.',
    enterNumber: 'Molimo Vas unesite validan broj.',
    greaterThanMax: '{{value}} prekoračuje maksimalan dozvoljeni {{label}} limit od {{max}}.',
    invalidInput: 'Ovo polje sadrži nevalidan unos.',
    invalidSelection: 'Ovo polje sadrži nevalidan odabir.',
    invalidSelections: 'Ovo polje ima sledeće nevalidne odabire:',
    lessThanMin: '{{value}} je ispod dozvoljenog minimuma za {{label}} (donji limit je {{min}}).',
    longerThanMin: 'Ova vrednost mora biti duža od minimalne dužine od {{minLength}} karaktera',
    notValidDate: '"{{value}}" nije validan datum.',
    required: 'Ovo polje je obavezno.',
    requiresAtLeast: 'Ovo polje zahteva minimalno {{count}} {{label}}.',
    requiresNoMoreThan: 'Ovo polje zahteva ne više od {{count}} {{label}}.',
    requiresTwoNumbers: 'Ovo polje zahteva dva broja.',
    shorterThanMax: 'Ova vrednost mora biti kraća od maksimalne dužine od {{maxLength}} karaktera',
    trueOrFalse: 'Ovo polje može biti samo tačno ili netačno',
    validUploadID: 'Ovo polje ne sadrži validan ID prenosa.',
  },
  version: {
    autosavedSuccessfully: 'Automatsko čuvanje uspešno.',
    draft: 'Nacrt',
    draftSavedSuccessfully: 'Nacrt uspešno sačuvan.',
    published: 'Objavljeno',
    restoredSuccessfully: 'Uspešno vraćeno.',
    status: 'Status',
  },
}