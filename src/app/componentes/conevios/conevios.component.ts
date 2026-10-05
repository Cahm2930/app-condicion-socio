import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

export interface Empresa {
  logo: string;
  descripcion: string;
}

@Component({
  selector: 'app-conevios',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatButtonModule, FormsModule],
  templateUrl: './conevios.component.html',
  styleUrl: './conevios.component.scss',
})
export class ConeviosComponent {
  empresas: Empresa[] = [
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalidadPacasmayo.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE PACASMAYO',
    },
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalidadEsperanza.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE LA ESPERANZA',
    },
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalidadGuadalupe.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE GUADALUPE',
    },
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalidadPacanga.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE PACANGA',
    },
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalidadFlorencia.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE FLORENCIA DE MORA',
    },
    {
      logo: '/imagenes/logosEmpresas/juntaUsuariosJequetepeque.jpg',
      descripcion:
        'JUNTA DE USUARIOS DEL SECTOR HIDRAULICO MENOR JEQUETEPEQUE CLASE A',
    },
    {
      logo: '/imagenes/logosEmpresas/redSaludPacasmayo.jpg',
      descripcion: 'RED DE SALUD PACASMAYO UNIDAD EJECUTORA 405',
    },
    {
      logo: '/imagenes/logosEmpresas/municipalidadPaijan.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE PAIJAN',
    },
    {
      logo: '/imagenes/logosEmpresas/logoZergeror.jpg',
      descripcion: 'ZV SERVICIOS GENERALES CORPORATIVO S.A.C. SERGECOR SAC',
    },
    {
      logo: '/imagenes/logosEmpresas/logoLaIndustria.jpg',
      descripcion: 'EMPRESA EDITORA LA INDUSTRIA DE TRUJILLO S.A.',
    },
    {
      logo: '/imagenes/logosEmpresas/logoIren.jpg',
      descripcion:
        'INSTITUTO REGIONAL DE ENFERMEDADES NEOPLASICAS DR. LUIS PINILLOS GANOZA IREN NORTE UNIDAD EJECUTORA 410',
    },
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalidadQuiruvilcajpg.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE QUIRUVILCA',
    },
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalidadJequetepeque.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE JEQUETEPEQUE',
    },
    {
      logo: '/imagenes/logosEmpresas/logoRedSaludChepen.jpg',
      descripcion: 'RED DE SALUD CHEPEN UNIDAD EJECUTORA 404',
    },
    {
      logo: '/imagenes/logosEmpresas/logoUnidadEjecutaraViru.jpg',
      descripcion: 'UNIDAD EJECUTORA 412 SALUD VIRU',
    },
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalidadChao.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE CHAO',
    },
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalSantiagoCao.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE SANTIAGO DE CAO',
    },
    {
      logo: '/imagenes/logosEmpresas/logoSaludGranChimu.jpg',
      descripcion: 'UNIDAD EJECUTORA 414 RED DE SALUD GRAN CHIMU',
    },
    {
      logo: '/imagenes/logosEmpresas/logoConstructoraRamwal.jpg',
      descripcion: 'CONSTRUCTORA E INMOBILIARIA RAMVAL S.A.C.',
    },
    {
      logo: '/imagenes/logosEmpresas/logoPremezcladosKen.jpg',
      descripcion: 'PREMEZCLADOS KEN S.A.C.',
    },
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalidadPorvenir.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE EL PORVENIR',
    },
    {
      logo: '/imagenes/logosEmpresas/logoMunicipalidadPoroto.jpg',
      descripcion: 'MUNICIPALIDAD DISTRITAL DE POROTO',
    },
    {
      logo: '/imagenes/logosEmpresas/logoProtector.jpg',
      descripcion: 'PROTEKTOR SEGURIDAD INTEGRAL S.A.C.',
    },
    {
      logo: '/imagenes/logosEmpresas/logoGrupo Zeus.jpg',
      descripcion: 'GRUPO ZEUS SERVICE S.A.C',
    },
    {
      logo: '',
      descripcion: 'SEGURIDAD INTEGRAL PROFESIONAL Y ESPECIALIZADA S.A.C.',
    },
    {
      logo: '/imagenes/logosEmpresas/logoSatt.jpg',
      descripcion: 'SERVICIO DE ADMINISTRACION TRIBUTARIA DE TRUJILLO',
    },
    {
      logo: '',
      descripcion: 'UTES 06 SERVICIOS PERIFERICOS TRUJILLO',
    },

    {
      logo: '/imagenes/logosEmpresas/logoUpao.jpg',
      descripcion: 'UPAO',
    },
    {
      logo: '/imagenes/logosEmpresas/logoSunarp.jpg',
      descripcion: 'ZONA REGISTRAL NO. V SEDE TRUJILLO',
    },
    {
      logo: '/imagenes/logosEmpresas/logoSedalib.jpg',
      descripcion: 'SEDALIB S.A.',
    },
    {
      logo: '/imagenes/logosEmpresas/logoCorteSuperior.jpg',
      descripcion: 'PODER JUDICIAL LA LIBERTAD',
    },
    {
      logo: '/imagenes/logosEmpresas/logoHospitalLeoncioPrado.jpg',
      descripcion: 'HOSPITAL LEONCIO PRADO - HUAMACHUCO',
    },
    {
      logo: '/imagenes/logosEmpresas/logoBeneficiencia.jpg',
      descripcion: 'BENEFICENCIA PUBLICA DE TRUJILLO',
    },
  ];

  paso11 = true;
  paso22 = false;
  form!: FormGroup;

  listaDias = [
    { descripcion: '1', value: '1' },
    { descripcion: '2', value: '2' },
  ];
  listaMeses = [
    { descripcion: 'Enero', value: '1' },
    { descripcion: 'Febrero', value: '2' },
  ];
  listaAnios = [
    { descripcion: '1978', value: '1' },
    { descripcion: '1979', value: '2' },
  ];
  opcionSeleccionada: number | null = null;
  a: any;
  opciones = [
    {
      id: 1,
      lista: 'Candidato',
      nombre: 'ARTURO FERNANDEZ ZAVALETA ARELLANOS',
      numero: '',
      imagen: '/imagenes/candidatos/candidato1.png',
      idpersona: '',
    },
    {
      id: 2,
      lista: 'Candidato',
      nombre: 'ARTURO FERNANDEZ ZAVALETA ARELLANOS',
      numero: '',
      imagen: 'assets/imagenes/presi1.jpg',
      idpersona: '',
    },
    {
      id: 3,
      lista: 'Candidato',
      nombre: 'ARTURO FERNANDEZ ZAVALETA ARELLANOS',
      numero: '',
      imagen: 'assets/imagenes/presi2.jpg',
      idpersona: '',
    },
    {
      id: 4,
      lista: 'Candidato',
      nombre: 'ARTURO FERNANDEZ ZAVALETA ARELLANOS',
      numero: '',
      imagen: 'assets/imagenes/presi7.jpg',
      idpersona: '',
    },
    {
      id: 5,
      lista: 'Candidato',
      nombre: 'ARTURO FERNANDEZ ZAVALETA ARELLANOS',
      numero: '',
      imagen: 'assets/imagenes/presi4.jpg',
      idpersona: '',
    },

    {
      id: 6,
      lista: 'Candidato',
      nombre: 'ARTURO FERNANDEZ ZAVALETA ARELLANOS',
      numero: '',
      imagen: 'assets/imagenes/presi4.jpg',
      idpersona: '',
    },
  ];

  ventana1 = true;
  ventana2 = false;
  ventana3 = false;
  ventana4 = true;
  showKeyboard: boolean = false;
  keys: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  siguiente = true;
  pasofinal = false;
  seleccionados: any[] = [];
  opcionesSeleccionadas: number[] = [];
  dato: any;
  timer: number = 120; // tiempo en segundos
  variableCambiada = false; // variable que cambiará al terminar
  bb: any;
  constructor(
    //  private candidatosService: CandidatosService,

    private fb: FormBuilder,
    private renderer: Renderer2,
  ) {
    //this.dato = JSON.parse(localStorage.getItem('UserData') || '');

    this.form = this.fb.group({
      ndocumento: [],
      dia: [],
      mes: [],
      anio: [],
    });

    /*
     this.renderer.listen('document', 'click', (event) => {
      const clickedInsideKeyboard = this.keyboard?.nativeElement.contains(event.target);
      const clickedInsideInput = this.passwordInput?.nativeElement.contains(event.target);
      
      if (!clickedInsideKeyboard && !clickedInsideInput) {
        this.showKeyboard = false;
      }
    });  */

    /*
    this.candidatosService.listarCandidatos().subscribe((data) => {
      this.opciones = this.opciones.map((op, index) => ({
        ...op,
        imagen: data[index].foto, // chancamos la imagen
        nombre: data[index].nombres,
        idpersona: data[index].idPersonaCandidato,
      }));
    });  
    */
  }

  tipoDocumento: 'DNI' | 'CE' = 'DNI';

  numeroDocumento: string = '';

  textoBusqueda: string = '';

  mostrarResultados: boolean = false;

  @ViewChild('contenedorBuscador')
  contenedorBuscador!: ElementRef;

  // ==========================================
  // CLICK FUERA DEL BUSCADOR
  // ==========================================

  @HostListener('document:click', ['$event'])
  clickFuera(event: MouseEvent): void {
    if (
      this.contenedorBuscador &&
      !this.contenedorBuscador.nativeElement.contains(event.target)
    ) {
      this.mostrarResultados = false;
    }
  }

  // ==========================================
  // MOSTRAR RESULTADOS
  // ==========================================

  mostrarResultadosBuscador(): void {
    if (this.textoBusqueda.trim()) {
      this.mostrarResultados = true;
    }
  }

  // ==========================================
  // SELECCIONAR EMPRESA
  // ==========================================

  seleccionarEmpresa(empresa: any): void {
    this.textoBusqueda = empresa.descripcion;

    this.mostrarResultados = false;

    // Tu lógica adicional...
    console.log('Empresa seleccionada:', empresa);
  }

  // ==========================================
  // LIMPIAR BUSCADOR
  // ==========================================

  limpiarBusqueda(): void {
    this.textoBusqueda = '';

    this.mostrarResultados = false;
  }

  get empresasFiltradas(): Empresa[] {
    const texto = this.textoBusqueda.trim().toLowerCase();

    if (!texto) {
      return this.empresas;
    }

    return this.empresas.filter((empresa) =>
      empresa.descripcion.toLowerCase().includes(texto),
    );
  }

  ubicanos() {}

  facebook() {}

  instagram() {}

  seleccionarDocumento(tipo: 'DNI' | 'CE'): void {
    this.tipoDocumento = tipo;

    // Limpiar el número anterior
    this.numeroDocumento = '';
  }

  verificarCliente(): void {
    console.log('Tipo:', this.tipoDocumento);
    console.log('Número:', this.numeroDocumento);
  }

  iniciarTemporizador() {
    const interval = setInterval(() => {
      this.timer--;

      if (this.timer === 0) {
        clearInterval(interval); // detiene el contador
        this.variableCambiada = true;
        location.reload();
      }
    }, 1000);
  }

  empezar() {
    /*
    this.candidatosService.listarEstadoElecciones().subscribe((data) => {
      // console.log(data);
      if (data[0].estado) {
        // this.paso11=false
        // this.paso22=true
        // this.iniciarTemporizador();
        //  console.log(localStorage.getItem('idpersona'));
        this.candidatosService.listarpadron().subscribe((data) => {
          // const idBuscado = "1234567";
          //  console.log(data);
          // const existe = data.some((item: any) => item.idPersona === this.dato.idPersona);
          const encontrado = data.find(
            (item: any) =>
              item.idPersona.trim() ===
              localStorage.getItem('idpersona')?.trim(),
          );

          //  if(existe)
          //  {
          //   this.paso11=false
          //            this.paso22=true
          //           this.iniciarTemporizador();
          // console.log(encontrado);
          if (encontrado) {
            if (encontrado.estado === true) {
             
            } else {
              console.log('Aún no votó');
              this.paso11 = false;
              this.paso22 = true;
              this.iniciarTemporizador();
            }
          } else {
            this.dialog.open(MensajeInformativoComponent, {
              disableClose: true,
              autoFocus: true,
              data: 'Estimado colaborador, usted no se encuentra en el padron.',
            });
            // acción si NO existe
          }
        });
      } else {
        
      }
    }); */
  }

  comparer = (option1: any, option2: any): boolean => {
    return option1 && option2
      ? option1.descripcion === option2.descripcion
      : option1 === option2;
  };

  ingresar() {}

  seleccionarOpcion(id: number) {
    // Si ya está seleccionado → quitarlo
    if (this.opcionesSeleccionadas.includes(id)) {
      this.opcionesSeleccionadas = this.opcionesSeleccionadas.filter(
        (op) => op !== id,
      );
      return;
    }

    // Si hay espacio (<2) → agregarlo
    if (this.opcionesSeleccionadas.length < 2) {
      this.opcionesSeleccionadas.push(id);
      return;
    }

    // Si ya hay 2 seleccionados → reemplazar al primero
    this.opcionesSeleccionadas.shift(); // elimina el más antiguo
    this.opcionesSeleccionadas.push(id); // agrega el nuevo
  }

  paso2() {}
  paso3() {
    if (this.opcionesSeleccionadas.length < 2) {
      /*
      this.dialog.open(MensajeInformativoComponent, {
        disableClose: true,
        autoFocus: true,
        data: 'Estimado colaborador debe seleccionar 2 candidatos',
      });*/
    } else {
      this.siguiente = false;
      this.pasofinal = true;
      console.log(this.opcionSeleccionada);

      this.opcionesSeleccionadas.forEach((x) => {
        console.log(x);
        this.seleccionados.push(this.opciones[x - 1]);
      });
    }
    //this.seleccionados.push(this.opciones[this.opcionesSeleccionadas])
  }

  regresar() {
    this.siguiente = true;
    this.pasofinal = false;
    this.seleccionados = [];
  }

  culminarVotacion() {
    // let candidato= new Candidatos()
    /*
    let voto = new Voto();
    voto.correoVotante = localStorage.getItem('correo') || '';
    voto.nombreVotante = localStorage.getItem('usuario') || '';
    voto.idVotante = localStorage.getItem('idpersona') || '';
    voto.idcandidato1 = this.seleccionados[0].idpersona;
    voto.idcandidato2 = this.seleccionados[1].idpersona;
    console.log(voto);
    this.candidatosService.registrar(voto).subscribe((data) => {
      console.log(data);
    });  */
    /*

    this.dialog
      .open(MensajeComponent, {
        maxWidth: '700px',
        disableClose: true,
        autoFocus: true,
      })
      .afterClosed()
      .subscribe(() => {
        console.log('cerro');
      });*/
  }
}
