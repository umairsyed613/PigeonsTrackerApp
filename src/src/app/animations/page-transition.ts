import { Animation, AnimationController } from "@ionic/angular";
const animationCtrl = new AnimationController();

// https://github.com/mhartington/v5-animations/blob/master/src/app/animations/index.ts
export const getIonPageElement = (element: HTMLElement) => {
  if (element.classList.contains("ion-page")) {
    return element;
  }

  const ionPage = element.querySelector(
    ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
  );
  if (ionPage) {
    return ionPage;
  }
  // idk, return the original element so at least something animates and we don't have a null pointer
  return element;
};

export const customPageTransition = (_: HTMLElement, opts: any): Animation => {
  //console.log(opts);
  // create root transition
  const rootTransition = animationCtrl
    .create()
    .duration(800)
    .easing('cubic-bezier(0.7,0,0.3,1)');

  const enterTransition = animationCtrl.create().addElement(opts.enteringEl);
  const exitTransition = animationCtrl.create().addElement(opts.leavingEl);

  enterTransition.fromTo('opacity', '0', '1');
  exitTransition.fromTo('opacity', '1', '0');

  if (opts.direction === 'forward') {
    enterTransition.fromTo('transform', 'scale(0)', 'scale(1)');

    exitTransition.fromTo('transform', 'scale(1)', 'scale(0)');
  } else {
    enterTransition.fromTo('transform', 'translateX(10%)', 'translateX(0%)');

    exitTransition.fromTo('transform', 'scale(1)', 'scale(0)');
  }

  rootTransition.addAnimation([enterTransition, exitTransition]);
  return rootTransition;
}
