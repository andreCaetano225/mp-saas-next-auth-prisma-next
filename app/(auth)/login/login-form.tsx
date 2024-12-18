'use client'

import Form from "next/form"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import loginAction from "./loginAction";


export const LoginForm = () => {
    return (
        <Form action={loginAction}>
            <div>
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="eu@exemplo.com" />
            </div>
            <div>
                <Label>Senha</Label>
                <Input type="password" name="password" placeholder="********" />
            </div>
            <div>
                <Button className="w-full mt-6" type="submit">
                    Login
                </Button>
            </div>
        </Form>
    )
}