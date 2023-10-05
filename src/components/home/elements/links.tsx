export function BusinessAccount () {
  return <p></p>
}

export function AddRestaurant () {
  return <p></p>
}

export function CourierRegistration() {
  return <p></p>
}


// Die oberen drei Komponenten müsste man eigentlich zu einer fusionieren können. Im Grunde, müssen drei Informationen flexibel sein und übergeben werden: useHref, die Class und der Text --> check das mal ab, ob es geht, wenn du die Komponente darüber schreibst. Notfalls müsste man es doch wieder auf drei Komponenten aufteilen
export function UnderSiteLinks() {
  return (
    <a 
      href=""
      className="
        sidebar-link
        link-to-undersite
      "
    >
        Ein Geschäftskontoo anlegen; Füge dein Restaurant hinzu; Registriere dich als Kurier
    </a>

  )
}



