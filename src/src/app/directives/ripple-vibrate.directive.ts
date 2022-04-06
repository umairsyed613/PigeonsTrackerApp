import {
  Directive,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Gesture, GestureController } from '@ionic/angular';
import { PTConfig } from "../models/config";
import { ConfigService } from "../services/config.service";

@Directive({
  selector: '[Ripple-Vibrate]'
})
export class RippleVibrateDirective implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private gestureCtrl: GestureController,
    private configSrv: ConfigService) { }

  ngAfterViewInit() {

    this.feedBackTouchVibrate();
  }
  feedBackTouchVibrate() {
    /** This is the workaround. */
    window.addEventListener(
      "ionGestureCaptured",
      event => {
        event.stopPropagation();
      },
      true
    );


    //console.log(this.el)
    const gesture: Gesture = this.gestureCtrl.create({
      el: this.el.nativeElement,
      threshold: 0,
      gestureName: 'my-gesture',
      onStart: ev => {
        //console.log(ev);
        //this.el.nativeElement.classList.add('ion-activated');
        const config = this.configSrv.GetConfig();
        //console.log(config);
        if (config != undefined && config.Vibration != undefined && config.Vibration != 'None') {
          Haptics.impact({ style: ImpactStyle[config.Vibration] });
        }
      },
      onEnd: ev => {
        // this.tile.nativeElement.classList.remove('ion-activated');
      }
    }, true);
    gesture.enable();
  }
}
