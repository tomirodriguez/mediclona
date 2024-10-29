'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export function MediclonaLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Calendar className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">MediclonaAr</span>
          <span className="sr-only">Mediclona Argentina</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            Nosotros
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Servicios
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#plans">
            Planes
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contacto
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Mediclona Argentina
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Atención médica personalizada y de calidad para su bienestar
                </p>
              </div>
              <div className="space-x-4">
                <Button className="inline-flex h-9 items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Agendar Consulta con Pauchi
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre Mediclona Argentina</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En Mediclona Argentina, nos dedicamos a proporcionar recetas medicas de Clonazepam. 
                  Con más de 15 años de experiencia, nuestro enfoque se centra en la prevención y el tratamiento 
                  efectivo de enfermedades, siempre priorizando el bienestar de nuestros pacientes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Nuestros Servicios</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Clock className="h-10 w-10" />
                <h3 className="text-xl font-bold">Recetas 24hs</h3>
                <p className="text-muted-foreground">Atención médica en horarios convenientes para usted.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-10 w-10" />
                <h3 className="text-xl font-bold">Atención Familiar</h3>
                <p className="text-muted-foreground">Cuidado integral para todos los miembros de su familia.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <CheckCircle className="h-10 w-10" />
                <h3 className="text-xl font-bold">Seguimiento Personalizado</h3>
                <p className="text-muted-foreground">Monitoreo continuo de su salud y progreso.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="plans" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Planes de Consulta</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Consulta Individual</CardTitle>
                  <CardDescription>Para necesidades ocasionales</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">US$100</p>
                  <p className="text-muted-foreground">por consulta</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Agendar</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pack de 4 Consultas</CardTitle>
                  <CardDescription>Ahorre en consultas regulares</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">US$360</p>
                  <p className="text-muted-foreground">US$90 por consulta</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Comprar Pack</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plan Ilimitado</CardTitle>
                  <CardDescription>Para cuidado continuo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">US$500</p>
                  <p className="text-muted-foreground">por mes</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Suscribirse</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contacto</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¿Tiene alguna pregunta? No dude en contactarnos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" variant="outline">
                  Llamar ahora
                </Button>
                <Button className="w-full">Enviar mensaje</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Mediclona Argentina. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}