import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbList = [];
        this.buildBreadcrumbList();
       
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
        console.log(route)
        if (route.outlet === 'primary') {
          const routeSnapshot = route.snapshot;
          url += '/' + routeSnapshot.url.map((segment: { path: any; }) => segment.path).join('/');
          this.currentUrl = url;
          
          if (routeSnapshot.data.breadcrumb && routeSnapshot.data.level) {
            console.log(routeSnapshot.data.breadcrumb)
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
}
