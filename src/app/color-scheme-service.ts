import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

export enum ColorSchemeE {
  Dark = 'dark',
  Light = 'light',
  Normal = 'normal'
}

export const defaultColorScheme = ColorSchemeE.Light


@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  
  private colorScheme: ColorSchemeE = defaultColorScheme
  private colorSchemeAttrName = 'color-scheme'
  private renderer: Renderer2

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null,null)
  }

  init(){
    this._getColorScheme()
  }

  _getColorScheme(){
    const localStorageColorScheme = localStorage.getItem('scheme');
    localStorageColorScheme ? this.colorScheme = localStorageColorScheme as ColorSchemeE : this.colorScheme = ColorSchemeE.Light
    console.log('Schema: ', this.colorScheme)
  }

  _setColorScheme(scheme: ColorSchemeE){
    this.colorScheme = scheme;
    localStorage.setItem('scheme', scheme)
  }

  set(scheme: ColorSchemeE){
    this._setColorScheme(scheme)
    this.renderer.setStyle(document.body, this.colorSchemeAttrName, scheme)
  }

  get():ColorSchemeE {
    return this.colorScheme
  }


}
