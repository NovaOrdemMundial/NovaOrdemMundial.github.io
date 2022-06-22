
//         //   Barras De Status   //          //

function statusMake(boss){
  const life       = document.getElementById('lifeDynamic');
  const resistence = document.getElementById('resisDynamic');
  const resilience = document.getElementById('resilDynamic');
  const force      = document.getElementById('forceDynamic');
  const focus      = document.getElementById('focusDynamic');
  const agility    = document.getElementById('agilyDynamic');
  //Bars calculator//
  const lifeResult    = Math.ceil(boss.status.vida / lifeMax * 100);
  const resisResult   = Math.ceil(boss.status.resistencia / resisMax * 100);
  const resilResult   = Math.ceil(boss.status.resiliencia / resilMax * 100);
  const forceResult   = Math.ceil(boss.status.força / forceMax * 100);
  const focusResult   = Math.ceil(boss.status.foco / focusMax * 100);
  const agilyResult   = Math.ceil(boss.status.agilidade / agilyMax * 100);
  
  //Bars Show
  life      .style.setProperty('--lifeStatus', lifeResult+'%');
  resistence.style.setProperty('--resistenceStatus', resisResult+'%');
  resilience.style.setProperty('--resilienceStatus', resilResult+'%');
  force     .style.setProperty('--forceStatus', forceResult+'%');
  focus     .style.setProperty('--focusStatus', focusResult+'%');
  agility   .style.setProperty('--agilityStatus', agilyResult+'%');
}

function statusMake(visit){
  const life       = document.getElementById('lifeDynamic');
  const resistence = document.getElementById('resisDynamic');
  const resilience = document.getElementById('resilDynamic');
  const force      = document.getElementById('forceDynamic');
  const focus      = document.getElementById('focusDynamic');
  const agility    = document.getElementById('agilyDynamic');
  //Bars calculator//
  const lifeResult    = Math.ceil(visit.status.vida / lifeMax * 100);
  const resisResult   = Math.ceil(visit.status.resistencia / resisMax * 100);
  const resilResult   = Math.ceil(visit.status.resiliencia / resilMax * 100);
  const forceResult   = Math.ceil(visit.status.força / forceMax * 100);
  const focusResult   = Math.ceil(visit.status.foco / focusMax * 100);
  const agilyResult   = Math.ceil(visit.status.agilidade / agilyMax * 100);
  
  //Bars Show
  life      .style.setProperty('--lifeStatus', lifeResult+'%');
  resistence.style.setProperty('--resistenceStatus', resisResult+'%');
  resilience.style.setProperty('--resilienceStatus', resilResult+'%');
  force     .style.setProperty('--forceStatus', forceResult+'%');
  focus     .style.setProperty('--focusStatus', focusResult+'%');
  agility   .style.setProperty('--agilityStatus', agilyResult+'%');
}
