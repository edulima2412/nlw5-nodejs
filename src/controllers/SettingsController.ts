import { Request, response, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(req: Request, res: Response) {
    try {
      const { chat, username } = req.body;

      const settingsService = new SettingsService();
      const settings = await settingsService.create({ chat, username });

      return res.json(settings);
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  async findByUsername(req: Request, res: Response) {
    const { username } = req.params;

    const settingService = new SettingsService();

    const settings = await settingService.findByUsername(username);

    return res.json(settings);
  }

  async update(req: Request, res: Response) {
    const { username } = req.params;
    const { chat } = req.body;

    const settingService = new SettingsService();
    const settings = await settingService.update(username, chat);

    return res.json(settings);
  }
}

export { SettingsController };
