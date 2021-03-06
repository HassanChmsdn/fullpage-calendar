import { Component } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService]
})
export class AppComponent {
  title = 'fullpage-calendar';
  public selectedDate: Date = new Date(2019, 0, 10);
  public eventSettings: EventSettingsModel = { dataSource: <Object[]>extend([], null, true) };
}