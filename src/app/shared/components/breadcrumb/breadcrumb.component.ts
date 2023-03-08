import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private titleService: Title) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbList = [];
        
        
        this.buildBreadcrumbList();
        let titleString='Sistema Informativo Trapianti '
       this.breadcrumbList.forEach(x=>{
        
        if (x.label) {
        titleString=titleString +' - '+x.label}
       })
       this.titleService.setTitle(titleString);
      }
    });
  }
  breadcrumbList: any[] = [];
  currentUrl: string = '';
  buildBreadcrumbList() {
   
    
    let currentRoute:any = this.activatedRoute.root;
    let url = '';
    do {
      const childrenRoutes = currentRoute.children;
      currentRoute = null;
      childrenRoutes.forEach((route: { outlet: string; snapshot: any; }) => {
        if (route.outlet === 'primary') {
          const routeSnapshot = route.snapshot;
          url += '/' + routeSnapshot.url.map((segment: { path: any; }) => segment.path).join('/');
          this.currentUrl = url;
          
          if (routeSnapshot.data.breadcrumb && routeSnapshot.data.level) {
            this.breadcrumbList.push({
              label: routeSnapshot.data.breadcrumb,
              level: routeSnapshot.data.level,
              url: url
            });
          }
          currentRoute = route;
        }
      });
    } while (currentRoute);
  }

  getTitleFromRoute(route: any): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.data && route.data.breadcrumb ? route.data.breadcrumb : 'Default Title';
  }
}
