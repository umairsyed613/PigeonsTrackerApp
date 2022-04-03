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
    //transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    //transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    enterTransition.fromTo('transform', 'rotateY(20deg)', 'rotateY(0)');
    enterTransition.fromTo('transform', 'rotateX(35deg)', 'rotateX(0deg)');
    enterTransition.fromTo('transform', 'translate(300px, -300px)', 'translate(0, 0)');
    enterTransition.fromTo('transform', 'skew(-35deg, 10deg)', 'skew(0deg, 0deg)');
    //enterTransition.fromTo('transform', 'translateX(-10%)', 'translateX(0%)');

    exitTransition.fromTo('transform', 'scale(1)', 'scale(0)');
    //exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(1.5%)');
  } else {
    enterTransition.fromTo('transform', 'translateX(10%)', 'translateX(0%)');

    exitTransition.fromTo('transform', 'scale(1)', 'scale(0)');
    //exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(-1.5%)');
  }

  rootTransition.addAnimation([enterTransition, exitTransition]);
  return rootTransition;
}
