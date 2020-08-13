/* tslint:disable:one-line */
import { HeroService } from './hero.service';
import { Logger } from '../logger.service';
import { UserService } from '../user.service';

/* khởi tạo HeroService: Typscript function pointer */
const heroServiceFactory = (logger: Logger, userService: UserService) => {
  return new HeroService(logger, userService.user.isAuthorized);
};

/**
 *  đây là cách tạo 1 service => Là singleton hay ko là tùy ta.
 *
 */
export let heroServiceProvider =
  { provide: HeroService,   /* khai báo interface  */
    useFactory: heroServiceFactory,  /* khai báo function implement HeroService interface */
    deps: [Logger, UserService]    /* khai báo các Dependencies để DI khi khởi tạo HeroService */
  };
